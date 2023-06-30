const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
