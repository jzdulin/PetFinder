module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // breed: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Miscellaneous"
        }
    }, {
        timestamps: false
    });

    Post.associate = function(models) {
        Post.belongsTo(models.Cat, {
          foreignKey: {
            allowNull: false
          }
        });
      };


  return Post;
};
  