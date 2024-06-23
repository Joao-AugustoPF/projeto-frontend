const formatImagePath = (path) => {
    if (!path) return ''; //Verificação se o path está vazio
    return path.replace('public\\', '');
};

export const imageUrl = (imagePath) => {
    const url = "http://localhost:3000/"
    const path = formatImagePath(imagePath)
    return `${url}${path}`
}