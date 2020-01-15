export interface User {
    $id: string;
    UserId: number;
    UserKey: string;
    CompanyId: number;
    FirstName: string;
    LastName: string;
    Acronym: string;
    Email: string;
    EmployeeStartDate: string,
    ImageURL: string,
    DepartmentId: number,
    JobTitleId: number,
    ResponsibleUserId: number,
    AuthorizingUserId: number,
    AllocatedDays: number,
    UsedDays: number,
    AvailableDays: number,
    AccumulatedDays: number,
    LanguageId: number,
    CalendarId: number,
    AgreementId: number,
    Weekends: string,
    IsAdmin: boolean,
    IsResponsible: boolean,
    Active: boolean
}