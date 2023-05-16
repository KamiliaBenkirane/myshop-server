module.exports = (sequelize, Sequelize) => {

    const Item = sequelize.define("item", {

        name: {

            type: Sequelize.STRING

        },

        price: {

            type: Sequelize.INTEGER

        },

        account: {

            type: Sequelize.INTEGER

        },

        rating: {

            type: Sequelize.INTEGER

        },

        description : {

            type : Sequelize.STRING

        }

    });

    return Item;

};