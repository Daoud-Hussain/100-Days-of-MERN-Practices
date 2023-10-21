const mongoose = require('mongoose');

const productScheme = mongoose.Schema(
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
              },
              "displacement": {
                "type": "number",
                "description": "The engine's displacement in liters"
              }
            },
            "required": ["fuelType", "displacement"]
          }
        },
        "required": ["make", "model", "year", "color", "engine"]
      
})

module.exports = mongoose.model('Car', productScheme);