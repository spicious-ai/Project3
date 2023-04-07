Download SQLite file from:
https://www.kaggle.com/datasets/behroozsohrabi/us-wildfire-records-6th-edition/code

Unzip and rename file to:
Firedata.sqlite

Leave file in whatever folder you are running app.py from just
DON'T UPLOAD SQLITE FILE TO GITHUB

THE DATABASE IS TOOOOO BIG FOR POOR OL' GITHUB!!

Then open a terminal and navigate to the location of the app.py file and run
>>> python app.py

flask will then open a local web page for you
THEN
in order to get the information using d3 in your javascript app WITHOUT getting a CORS error

open a new terminal
navigate to the folder containing 'index.html'
input:
>>> python -m http.server 8001

you can then open http://localhost:8001/

this is the page where our final map project will properly load


<3<3<3 Ben
