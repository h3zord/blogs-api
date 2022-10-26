const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true ,
      allowNull: false,
    },
    displayName: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING, 
      unique: true 
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      as: 'blog_posts',
    });
  };

  return User;
};

module.exports = User;