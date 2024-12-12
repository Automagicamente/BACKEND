const validateComment = (comment) => {
    if (comment && comment.length > 7) {
        throw new Error('Comment cannot exceed 7 characters.');
    }
};

export default validateComment;
