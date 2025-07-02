from flask import Flask, render_template

# Initialize the Flask application
app = Flask(_name_)

# Define the route for the homepage
@app.route('/')
def home():
    # This tells Flask to find 'index.html' in the 'templates' folder
    return render_template('index.html')

# This block allows you to run the app by executing this python file
if _name_ == '_main_':
    # debug=True gives you helpful error messages in the browser
    app.run(debug=True)