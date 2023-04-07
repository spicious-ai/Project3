import numpy as np
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import MetaData
from sqlalchemy import Table, Column, Integer, String

from flask import Flask, jsonify
from flask_cors import CORS




#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///firedata.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
metadata = MetaData(bind=engine)

# Save reference to the table
fires = Table('fires', metadata, autoload=True)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app, resources = {r"/api/*": {"origins": ["http://localhost:8001"]}})

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/fires.geojson<br/>"
    )

@app.route("/api/v1.0/fires.geojson", methods=['GET'])
def fires():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = engine.execute('select FIRE_NAME, FIRE_YEAR, LATITUDE, LONGITUDE, FIRE_SIZE, NWCG_GENERAL_CAUSE from fires where FIRE_YEAR = 2000 limit 100').all()


    session.close()
    #all_names = list(np.ravel(results))
    all_fires = []
    for FIRE_NAME, FIRE_YEAR, LATITUDE, LONGITUDE, FIRE_SIZE, NWCG_GENERAL_CAUSE  in results:
        fire_dict = {
              "type": "Feature",
              "geometry": {
                    "type": "Point",
                    "coordinates": [LONGITUDE, LATITUDE]
                          },
              "properties": {
                "name": FIRE_NAME,
                "year": FIRE_YEAR,
                "size": FIRE_SIZE,
                "cause": NWCG_GENERAL_CAUSE
                          }
            }
        all_fires.append(fire_dict)
    final_fires = {"type":"FeatureCollection",
                   "metadata": {
                                "url": "http://127.0.0.1:8000/api/v1.0/fires.geojson",
                                "title": "US Fires 1992 - 2020",
                                "status": 200,
                                "count": len(all_fires)
                              },
                   "features":[all_fires]}

               
        
    return jsonify(final_fires)



if __name__ == "__main__":
    app.run(port=8000, debug=True)
