import Chat from '../models/chat';

export function addMessage(req, res){
	var groupName = req.body.groupName;
	Chat.update({group:groupName},{
		$set:{
			group.message = req.body.message
		}
	})
}

export function getMessage(req, res){
	var groupName = req.body.groupName;
	Chat.findOne({group:groupName}, function(err, result){
		if(err){
			console.log("error", err)
		} else {
			res.json({status:true, data:result})
		}
	}
}