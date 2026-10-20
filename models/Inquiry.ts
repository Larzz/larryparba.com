import mongoose, { type InferSchemaType, type Model } from 'mongoose'

const inquiryMessageSchema = new mongoose.Schema({
	sender: { type: String, enum: ['visitor', 'admin'], required: true },
	body: { type: String, required: true, maxlength: 5000 },
	createdAt: { type: Date, default: Date.now, required: true },
}, { _id: true })

const inquirySchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true, maxlength: 100 },
	email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
	question: { type: String, required: true, trim: true, maxlength: 5000 },
	status: { type: String, enum: ['new', 'in_progress', 'resolved'], default: 'new', required: true, index: true },
	messages: { type: [inquiryMessageSchema], default: [] },
	sourcePath: { type: String, maxlength: 500 },
	ipHash: { type: String, required: true, index: true },
	emailNotification: {
		adminNotifiedAt: Date,
		lastVisitorNotifiedAt: Date,
		lastError: String,
	},
}, { timestamps: true })

inquirySchema.index({ createdAt: -1 })
inquirySchema.index({ ipHash: 1, createdAt: -1 })

export type InquiryDocument = InferSchemaType<typeof inquirySchema>

const Inquiry = (mongoose.models.Inquiry as Model<InquiryDocument> | undefined) || mongoose.model<InquiryDocument>('Inquiry', inquirySchema)

export default Inquiry
