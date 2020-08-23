<?php
// The role "Administrator" by default has access to all components
abstract class ComponentRoleBasedAccess {
    public static $AccessArray = array(
        "Anonymous" => [
            "authentication",
            "account_registration"],
        "User" => [
            "my_profile",
            "current_user_profile_manager",
            "profile_picture_uploader",
            "account_additional_info_manager",
            "account_additional_info_manager_data_series",
            "account_additional_info_manager_create",
            "expenses_crud",
            "expenses_crud_create",
            "expenses_crud_data_series",
            "expenses_crud_update",
            "expenses_data_grid",
            "expenses_data_grid_create",
            "expenses_data_grid_data_series",
            "expenses_data_grid_update",
            "expenses_page",
            "category_totals",
            "category_crud_update",
            "account_additional_info_manager_update"],
        // Define an array for each additional user role in the system here.
    );
}
