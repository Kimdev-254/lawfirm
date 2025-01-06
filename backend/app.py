from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)

# Load the fine-tuned model and tokenizer
model = AutoModelForSequenceClassification.from_pretrained("./fine_tuned_legal_bert")
tokenizer = AutoTokenizer.from_pretrained("./fine_tuned_legal_bert")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    question = data['question']
    
    # Tokenize and predict
    inputs = tokenizer(question, return_tensors="pt", truncation=True, padding=True, max_length=512)
    outputs = model(**inputs)
    
    # Get the predicted class (0 for negative, 1 for positive)
    predicted_class = torch.argmax(outputs.logits).item()
    
    # You might want to implement a more sophisticated answer generation here
    answer = "Based on the legal context, the answer is positive." if predicted_class == 1 else "Based on the legal context, the answer is negative."
    
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)