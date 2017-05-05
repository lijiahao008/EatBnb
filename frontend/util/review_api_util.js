export const createMenuReview = (menu_review) => {
  return $.ajax({
    method: 'POST',
    url: '/api/menu_reviews',
    data: menu_review
  });
};


export const updateMenuReview = (menu_review) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/menu_reviews/${menu_review.id}`,
    data: menu_review
  });
};

export const deleteMenuReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/menu_reviews/${menu_review.id}`
  });
};
