module.exports = (sequelize, Sequelize) => {
	const UserLeaveBalance = sequelize.define('user_leave_balance', {
		user_id:{
			type:Sequelize.INTEGER
		},
		leave_type_id:{
			type:Sequelize.INTEGER
		},
		total_leave:{
			type:Sequelize.NUMERIC
		},
		leave_taken:{
			type:Sequelize.NUMERIC
		},
		leave_year:{
			type:Sequelize.INTEGER
		}
	}, {underscored: true,timestamps: true,freezeTableName: true});
	UserLeaveBalance.associate = function(models) {
	    UserLeaveBalance.belongsTo(models.leave_type);
	}
	return UserLeaveBalance;
}