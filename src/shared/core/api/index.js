import ApiClient from './apiClient';

const apiClient = new ApiClient();

/**
  * AUTH API ROUTES
  * -------------------------
  * @exports doSignup
  * @exports doLogin
  * @exports doForgotPassword
  * @exports doResetPassword
  * @exports doAuthCheck
  *****************************************************************/

export const doSignup = data => apiClient.post('/auth/signup', { data });

export const doLogin = data => apiClient.post('/auth/login', { data });

export const doAuthCheck = token => apiClient.get('/auth/check');

export const doVerifyAccount = token => apiClient.get(`/auth/verification/${token}`);

/**
  * TOKEN API ROUTES
  * -------------------------
  * @exports doForgotPassword
  * @exports doResetPassword
  *****************************************************************/
export const doForgotPassword = email => apiClient.post('/tokens/forgot-password', { data: { email } });

export const doResetPassword = (password, token) =>
  apiClient.post(`/tokens/reset-password/${token}`, { data: { password } });

/**
  * POST API ROUTES
  * -------------------------
  * @exports getAllPosts
  * @exports getPostById
  * @exports delPostById
  * @exports createPost
  * @exports putPostId
  *****************************************************************/

export const getAllPosts = () =>
  apiClient.get('/posts?include=[author,tags,comments,comments.commenter,comments.replies]');

export const getPostById = postId => apiClient.get(`/posts/${postId}`);

export const getPostBySlug = slug => apiClient.get(`/posts/slug/${slug}`);

export const delPostById = postId => apiClient.del(`/posts/${postId}`);

export const createPost = data => apiClient.post('/posts', { data });

export const putPostId = postData => apiClient.put(`/posts/${postData.id}`, { data: postData });

export const doNewPostComment = (data, postId) => {
  const payload = {
    content: data.content,
    raw_content: data.raw_content,
  };
  return apiClient.post(`/posts/${postId}/comments`, { data: payload });
};

/**
    * SETTINGS API ROUTES
    * -------------------------
    * @exports doUpdateSettings
    * @exports doLoadSettings
    *****************************************************************/

export const doUpdateSettings = payload => {
  const settingId = payload.id;
  const data = {
    value: payload.value,
  };
  return apiClient.put(`/settings/${settingId}`, { data });
};

export const getAllSettings = () => apiClient.get('/settings');

/**
    * NAVIGATION API ROUTES
    * -------------------------
    * @exports getAllNavs
    * @exports doUpdateNavigationLinks
    *****************************************************************/

export const getMainNav = () => apiClient.get('/menus/1');

export const doUpdateMenuDetails = data => apiClient.put(`/menu-details/${data.id}`, { data });

export const doAddNavigationLinks = values => {
  const payload = {
    name: values.name,
    href: values.href,
    mobile_href: values.mobile_href,
    has_dropdown: values.has_dropdown,
    css_classname: values.css_classname,
    icon: values.icon,
    menu_id: 1,
    order: values.order,
    children: {
      key: values.key,
      items: values.items,
    },
  };
  return apiClient.post('/menu-details', { data: payload });
};

/**
    * ACTIVITIES API ROUTES
    * -------------------------
    * @exports doGetActivities
    *****************************************************************/

export const getAllActivities = () => apiClient.get('/activities');

/**
  * ATTATCHMENT API ROUTES
  * -------------------------
  * @exports doLoadNav
  *****************************************************************/

export const getAllAttachments = () => apiClient.get('/attachments');

export const doUpload = payload => {
  const data = {
    file_name: payload.file_name,
    safe_name: payload.safe_name,
    url: payload.url,
  };

  return apiClient.post('/attachments/dashboard', { data });
};
export const updateFileProperties = attachmentData => {
  const data = {
    file_name: attachmentData.file_name,
    id: attachmentData.id,
    file_description: attachmentData.file_description,
  };

  return apiClient.put(`/attachments/${attachmentData.id}`, { data });
};

export const delAttachment = id => apiClient.del(`/attachments/${id}`);

/**
    * PAGES API ROUTES
    * -------------------------
    * @exports getAllPages
    * @exports getPageByUrl
    * @exports doCreatePage
    *****************************************************************/
export const getAllPages = () => apiClient.get('/pages');

export const getPageByUrl = url => apiClient.get(`/pages/${url}`);

export const doCreatePage = payload => apiClient.post('/pages', { data: payload });

export const getAllTemplates = () => apiClient.get('/templates');

export const getTemplateResource = resource => apiClient.get(`/templates/${resource}`);

export const doCreateTemplate = payload => apiClient.post('/templates', { data: payload });

/**
    * TAGS API ROUTES
    * -------------------------
    * @exports doFetchTags
    *****************************************************************/

export const doFetchTagPosts = name => apiClient.get(`/tags/${name}/posts`);

export const getAllTags = () => apiClient.get('/tags?include=posts');
export const getOnlyTags = () => apiClient.get('/tags');
export const doAddTag = values => {
  const payload = {
    name: values.name,
    description: values.description,
  };
  return apiClient.post('/tags', { data: payload });
};

export const doDeleteTag = id => apiClient.del(`/tags/${id}`);
/**
  * MEMBERS API ROUTES
  * -------------------------
  * @exports getAllMembers
  * @exports doUpdateMember
  *****************************************************************/
export const getAllMembers = () => apiClient.get('/users?include=[roles]');

export const doUpdateMember = userData => {
  const payload = {
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName,
    avatarUrl: userData.avatarUrl,
    role: userData.role,
  };
  return apiClient.put(`/users/admin/${userData.id}`, { data: userData });
};

export const getUserProfile = username => apiClient.get(`/users/${username}/profile`);

export const doUpdateProfile = userData => {
  const payload = {
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName,
    avatarUrl: userData.avatarUrl,
    bio: userData.bio,
    location: userData.location,
    website: userData.website,
    social: userData.social,
    profile_image: userData.profile_image,
  };
  return apiClient.put(`/users/${userData.id}`, { data: userData });
};
/**
  * ADMIN API ROUTES
  * -------------------------
  * @exports getAllStats
  *****************************************************************/
export const getAllStats = () => apiClient.get('/admin/stats');
