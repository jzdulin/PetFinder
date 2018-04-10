module.exports = function(sequelize, DataTypes) {
    var Cat = sequelize.define("Cat", {
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      life_span:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      } 
    }, {
      timestamps: false
    });
    return Cat;
  };
  