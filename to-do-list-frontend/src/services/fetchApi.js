const URL_FETCH = 'http://localhost:3001/';
const APLICATION = 'application/json';
export async function createUser(name, lastName, email, password) {
  try {
    const response = await fetch(`${URL_FETCH}user`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${URL_FETCH}login`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function getUser(token, id) {
  try {
    const response = await fetch(`${URL_FETCH}user/${id}`, {
      method: 'GET',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function updateUser(token, id, { name, lastName, password }) {
  try {
    const response = await fetch(`${URL_FETCH}user/${id}`, {
      method: 'PUT',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
      body: JSON.stringify({
        name,
        lastName,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function deleteUser(token, id) {
  try {
    const response = await fetch(`${URL_FETCH}user/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function updateCategory(token, id, categoryId) {
  try {
    const response = await fetch(`${URL_FETCH}tasks/category/${id}`, {
      method: 'PUT',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
      body: JSON.stringify({
        categoryId,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function createTask(token, { title, description, priority, dateLimit }) {
  try {
    const response = await fetch(`${URL_FETCH}tasks`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
      body: JSON.stringify({
        title,
        description,
        priority,
        dateLimit,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function getTasks(token, id) {
  try {
    const response = await fetch(`${URL_FETCH}tasks/${id}`, {
      method: 'GET',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function getAllTasks(token) {
  try {
    const response = await fetch(`${URL_FETCH}tasks/`, {
      method: 'GET',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function updateTasks(token, id,
  { title, description, priority, dateLimit }) {
  try {
    const response = await fetch(`${URL_FETCH}tasks/${id}`, {
      method: 'PUT',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
      body: JSON.stringify({
        title,
        description,
        priority,
        dateLimit,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function deleteTasks(token, id) {
  try {
    const response = await fetch(`${URL_FETCH}tasks/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
        Authorization: token,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}
