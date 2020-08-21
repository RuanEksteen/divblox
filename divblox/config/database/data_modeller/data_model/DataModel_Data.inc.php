<?php
/* GENERATED FILE.
	- This file is created and maintained by the divblox Data Modeller. This file can be modified here, but if the Data
	  Modeller is used to update the project's data model, this file will be regenerated and all local changes might be lost
	- This file is used to provide the data model data to the DataModel class */
abstract class DataModelData {
	public static $ProjectEntityArray = array("Expenses","Category");
	public static $ProjectEntityAttributeArray = array(
        "Expenses"
            => array("ExpenceName","ExpenseValue"),
        "Category"
            => array("CategoryName","TotalExpenses"));
	public static $ProjectEntityAttributeTypeArray = array(
        "Expenses"
            => array("VARCHAR(50)","INT"),
        "Category"
            => array("VARCHAR(50)","INT"));
	public static $ProjectEntitySingleRelationshipArray = array(
        "Expenses"
            => array("Category"));
	public static $UserRoleArray = array("Administrator","User");
    public static $ModuleArray = array(
    "Main" => array("Account","AdditionalAccountInformation","AllowedApiOperation","ApiKey","ApiOperation","AuditLogEntry","BackgroundProcess","BackgroundProcessUpdate","Category","ClientAuthenticationToken","ClientConnection","EmailMessage","Expenses","FileDocument","PageView","PasswordReset","PushRegistration","UserRole",));
}
?>