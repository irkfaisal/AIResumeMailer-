import mongoose from "mongoose";

const jobDescriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    jobTitle: {
        type: String,
        required: [true, 'Job title is required'],
        minlength: [2, 'Job title must be at least 2 characters'],
        maxlength: [200, 'Job title must not exceed 200 characters']
    },
    roles: {
        type: [{
            type: String,
            minlength: [5, 'Each role must be at least 5 characters'],
            maxlength: [500, 'Each role must not exceed 500 characters']
        }],
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'At least one role & responsibility is required'
        }
    },
    skills: {
        type: [{
            type: String,
            minlength: [2, 'Each skill must be at least 2 characters'],
            maxlength: [100, 'Each skill must not exceed 100 characters']
        }],
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'At least one skill is required'
        }
    },
    noticePeriod: {
        type: String,
        maxlength: [100, 'Notice period must not exceed 100 characters']
    },
    additionalNotes: {
        type: String,
        maxlength: [1000, 'Additional notes must not exceed 1000 characters']
    }
}, {
    timestamps: true
});

const JobDescription = mongoose.model('JobDescription', jobDescriptionSchema);
export default JobDescription;
