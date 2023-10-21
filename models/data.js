const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        "type": "object",
        "properties": {
          "make": {
            "type": "string",
            "description": "The car's manufacturer or make"
          },
          "model": {
            "type": "string",
            "description": "The car's model"
          },
          "year": {
            "type": "integer",
            "minimum": 1886,
            "description": "The manufacturing year of the car"
          },
          "color": {
            "type": "string",
            "description": "The color of the car"
          },
          "engine": {
            "type": "object",
            "properties": {
              "fuelType": {
                "type": "string",
                "description": "The type of fuel the car uses"
              }
              
            },
            "required": ["fuelType", "displacement"]
          }
        },
        "required": ["make", "model", "year", "color", "engine"]
      
})

module.exports = mongoose.model('Data', productSchema);