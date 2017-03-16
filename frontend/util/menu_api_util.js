
export const fetchTopRatedMenus = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus',
    data: { top_rated: true }
  });
};

export const fetchRecommendedMenus = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus',
    data: { recomended: true }
  });
};


export const fetchMyMenus = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus',
    data: { my_menus: true }
  });
};


export const fetchMenus = (filter) => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus',
    data: filter
  });
};

export const fetchMenu = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/menus/${id}`
  });
};

export const createMenu = (menu) => {
  return $.ajax({
    method: 'POST',
    contentType: false,
    processData: false,
    url: '/api/menus',
    data: menu
  });
};

export const updateMenu = (menu) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `/api/menus/${menu.id}`,
    data: menu
  });
};
