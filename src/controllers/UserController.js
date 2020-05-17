const User = require("../models/UserModel");
const Type = require("../models/TypeModel");

getAll = async (req, res) => {
    try {
        const data = await User.find().exec();

        res.status(200).json({
            data,
            message: 'User listed'
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
};

getId = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await User.findById(id).exec();
        res.status(200).json({
            data,
            message: 'User listed'
        });

    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
};

getTypes = async (req, res) => {
    try {
        const data = await Type.find().exec();

        res.status(200).json({
            data,
            message: 'Phone Types listed'
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

create = async (req, res) => {
    try {

        const data = new User(req.body);

        const saved = await data.save();

        res.status(201).json({
            data: saved,
            message: "Create user sucessful"
        });

    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

update = async (req, res) => {
    try {
        const { id } = req.params;
        // const { firstName, lastName, gender, phone, phoneType, email } = req.body;

        const update = await User.findOneAndUpdate({_id: id}, req.body, { new: true });

        res.status(200).json({
            data: update,
            message: "User Update Successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

deleted = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await User.deleteOne({_id: id});

        if(response.deletedCount > 0){
            res.status(200).json({
                data: response.deletedCount,
                message: "User successfully Removed",
            });
        } else {
            res.status(404).json({
                data: response.deletedCount,
                message: "Not Delete User",
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

module.exports = {
    getAll,
    getId,
    getTypes,
    create,
    update,
    deleted
}