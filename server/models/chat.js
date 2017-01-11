import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	group: {type: 'Object'}
	group.message: { type: 'String'},
  // group.uid: {type: [mongoose.Schema.Types.ObjectId]},
  createdAt : { type: 'Date', default: Date.now, required: true },
  updatedAt : { type: 'Date', default: Date.now, required: true },
  createdBy : { type: 'Date', default: Date.now, required: true },
  updatedBy : { type: 'Date', default: Date.now, required: true },
  date: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Chat', postSchema);