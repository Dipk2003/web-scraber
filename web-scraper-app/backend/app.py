from flask import Flask, jsonify
from flask_cors import CORS
from scraper import scrape_headlines

app = Flask(__name__)
CORS(app)

@app.route('/api/scrape')
def scrape():
    data = scrape_headlines()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
