import React from 'react';

const Comment = ({ commentData }) => {
	// commentDataがnullの場合は何も表示しない
	if (!commentData) {
		return null;
	}

	const { morningMenu, lunchMenu, dinnerMenu, snackMenu } = commentData;

	return (
		<div>
			<h3>Comment:</h3>
			<p>
				Morning Menu: {morningMenu && morningMenu.map((option) => option.label).join(', ')}
			</p>
			<p>
				Lunch Menu: {lunchMenu && lunchMenu.map((option) => option.label).join(', ')}
			</p>
			<p>
				Dinner Menu: {dinnerMenu && dinnerMenu.map((option) => option.label).join(', ')}
			</p>
			<p>
				Snack Menu: {snackMenu && snackMenu.map((option) => option.label).join(', ')}
			</p>
		</div>
	);
};

export default Comment;
