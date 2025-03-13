/**
 * Returns a human-readable label for project privacy status
 * @param privacy The privacy status of the project
 * @returns A formatted string representing the privacy status
 */
export const getPrivacyLabel = (privacy: string): string => {
  if (privacy === "closed") {
    return "Closed Source";
  }
  if (privacy === "open") {
    return "Open Source";
  }
  if (privacy === "internal") {
    return "Internal Project";
  }
  return "";
};