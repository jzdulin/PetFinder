module.exports = function(sequelize, DataTypes) {
    var Animals = sequelize.define("Animals", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Animals;
  };
  