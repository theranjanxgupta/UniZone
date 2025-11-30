// Local storage utilities for authentication and data management

export interface User {
  name: string;
  email: string;
  password: string;
  college: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  imageUrl?: string;
  timestamp: number;
}

export interface ClassAnnouncement {
  id: string;
  department: string;
  message: string;
  imageUrl?: string;
  documentUrl?: string;
  timestamp: number;
  author: string;
}

// User Authentication
export const saveUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('unizone_users', JSON.stringify(users));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem('unizone_users');
  return users ? JSON.parse(users) : [];
};

export const validateUser = (email: string, password: string): User | null => {
  const users = getUsers();
  return users.find(u => u.email === email && u.password === password) || null;
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('unizone_current_user');
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem('unizone_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('unizone_current_user');
  }
};

// Chat Messages
export const getChatMessages = (): ChatMessage[] => {
  const messages = localStorage.getItem('unizone_chat_messages');
  return messages ? JSON.parse(messages) : [];
};

export const addChatMessage = (message: ChatMessage): void => {
  const messages = getChatMessages();
  messages.push(message);
  localStorage.setItem('unizone_chat_messages', JSON.stringify(messages));
};

// Class Announcements
export const getClassAnnouncements = (department: string): ClassAnnouncement[] => {
  const announcements = localStorage.getItem(`unizone_announcements_${department}`);
  return announcements ? JSON.parse(announcements) : [];
};

export const addClassAnnouncement = (announcement: ClassAnnouncement): void => {
  const announcements = getClassAnnouncements(announcement.department);
  announcements.push(announcement);
  localStorage.setItem(`unizone_announcements_${announcement.department}`, JSON.stringify(announcements));
};

// Class Chat Messages
export const getClassChatMessages = (department: string): ChatMessage[] => {
  const messages = localStorage.getItem(`unizone_class_chat_${department}`);
  return messages ? JSON.parse(messages) : [];
};

export const addClassChatMessage = (department: string, message: ChatMessage): void => {
  const messages = getClassChatMessages(department);
  messages.push(message);
  localStorage.setItem(`unizone_class_chat_${department}`, JSON.stringify(messages));
};

// Club Announcements
export const getClubAnnouncements = (club: string): ClassAnnouncement[] => {
  const announcements = localStorage.getItem(`unizone_club_${club}`);
  return announcements ? JSON.parse(announcements) : [];
};

export const addClubAnnouncement = (club: string, announcement: ClassAnnouncement): void => {
  const announcements = getClubAnnouncements(club);
  announcements.push(announcement);
  localStorage.setItem(`unizone_club_${club}`, JSON.stringify(announcements));
};