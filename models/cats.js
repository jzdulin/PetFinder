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
      },
      img1:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      img2:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      img3:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      history:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      personality:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      care:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      children_animals:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      health:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
    }, {
      timestamps: false
    });

    Cat.associate = function(models) {
      Cat.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };

    return Cat;
  };
  