import { gql } from "apollo-server-core";

const enums = gql`
  scalar Date

  enum Enum_UserStatus {
    PENDIENTE
    AUTORIZADO
    RECHAZADO
  }

  enum Enum_UserRol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_ProjectStatus {
    ACTIVO
    INACTIVO
  }

  enum Enum_ProjectPhase {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_ObjectiveType {
    GENERAL
    ESPECIFICO
  }

  enum Enum_InscriptionStatus {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }
`;

export { enums };
