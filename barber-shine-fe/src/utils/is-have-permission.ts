export default function IsHavePermission(
  rolesRequired: Array<string>,
  userRoles: Array<string>
) {
  if (userRoles.includes('ROLE_MANAGER')) return true
  for (let i = 0; i < rolesRequired.length; i++) {
    if (!userRoles.includes(rolesRequired[i])) {
      return false
    }
  }
  return true
}
