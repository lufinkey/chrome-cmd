
const Target = {};
module.exports = Target;

// targetting functions

Target.parse = function(targetStr)
{
	// regex parse target
	var matches = targetStr.match(new RegExp('^(server|controller)(?::([^:\/]+)(?:\/(.*))?)?$'));
	if(matches == null)
	{
		return null;
	}
	// create target
	var target = {
		type: matches[1],
		name: matches[2],
		identifier: matches[3]
	};
	// validate target
	if(target.type == 'server' && (target.name != null || target.type != null))
	{
		return null;
	}
	return target;
}

Target.equal = function(target1, target2)
{
	if(target1 == null || target2 == null)
	{
		return false;
	}
	if(target1.type !== target2.type || target1.name !== target2.name)
	{
		return false;
	}
	if(target1.identifier == null && target2.identifier == null)
	{
		return true;
	}
	if(target1.identifier !== target2.identifier)
	{
		return false;
	}
	return true;
}

Target.stringify = function(target)
{
	var targetStr = ''+target.type;
	if(target.name != null)
	{
		targetStr += ':'+target.name;
		if(target.identifier != null)
		{
			targetStr += '/'+target.identifier;
		}
	}
	return targetStr;
}