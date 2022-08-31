const getNameInitials = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);
    return `${firstInitial}${lastInitial}`
}
export default getNameInitials