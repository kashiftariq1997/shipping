import mongoose from "mongoose";

const chargeSchema = new mongoose.Schema({
  charge: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  }
});

const fileSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  paperSize: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  }
});

const labelSchema = new mongoose.Schema(
	{
    externalId: {
			type: String,
			required: true,
		},
    status: {
			type: String,
			required: true,
		},
    shipDate: {
			type: String,
			required: true,
		},
    trackingNumbers: {
			type: [String],
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
    shippingAccount: {
			type: String,
			required: true,
		},
    serviceType: {
			type: String,
			required: true,
		},
    serviceName: {
			type: String,
			required: true,
		},
    charge: {
			type: chargeSchema,
			required: true,
		},
    file: fileSchema
	},
	{
		timestamps: true
	}
);

export default mongoose.model('label', labelSchema);
