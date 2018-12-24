
module.exports = (sequelize, Sequelize) => {
	const LeaveType = sequelize.define('leave_type', {
		org_id:{
			type:Sequelize.INTEGER
		},
		type:{
			type: Sequelize.STRING,
		},
		days:{
			type:Sequelize.NUMERIC
		},
		life_span_day:{
			type:Sequelize.NUMERIC
		},
		life_span_term:{
			type:Sequelize.STRING
		},
		carryforward_allowed:{
			type:Sequelize.BOOLEAN
		},
		max_carryforward:{
			type:Sequelize.NUMERIC
		},
	}, {underscored: true,timestamps: true,freezeTableName: true});
	return LeaveType;
}