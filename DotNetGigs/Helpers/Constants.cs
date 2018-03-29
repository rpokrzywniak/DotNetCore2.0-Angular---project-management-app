

namespace DotNetGigs.Helpers{

 public static class Constants
    {
        public static class Strings
        {
            public static class JwtClaimIdentifiers
            {
                public const string Rol = "rol", Id = "id";
            }

            public static class JwtClaims
            {
                public const string ApiAccess = "api_access";
                public const string ApiAdminAccess = "api_admin_access";
                public const string ApiWorkerAccess = "api_worker_access";
                public const string ApiStudentAccess = "api_student_access";
            }
        }
    }

}
