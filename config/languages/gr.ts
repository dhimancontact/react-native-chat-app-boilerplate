import { AppLanguage } from '../languages'

export const gr: AppLanguage = {
  searchPlacerHolder: "Chats suchen",
  messagePlacerHolder: "Geben Sie hier Text für Nachricht ein ...",
  namePlaceholder: "Vollständiger Name",
  usernamePlacerHolder: "Nutzername",
  emailPlacerHolder: "Email",
  passwordPlacerHolder: "Passwort",
  loginButton: "Einloggen",
  logoutButton: "Ausloggen",
  signupButton: "Anmelden",
  signupCheck: "Wenn Sie kein Konto haben",
  chatTitle: "Chats",
  appName: "Recraft Chat App",
  blockButton: "Block",
  reportButton: "Bericht",
  deleteButton: "Konversation löschen",
  defaultLanguage: "Standardsprache",
  defaultTheme: "Dunkles Thema",
  loginValidation : {
    username: `Ein Benutzername ist erforderlich`,
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
  signupValidation : {
    name: `Der vollständige Name ist erforderlich`,
    username: `Ein Benutzername ist erforderlich`,
    email: `E-Mail ist erforderlich`,
    validEmail: 'Bitte geben Sie eine gültige Email-Adresse ein',
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
}
