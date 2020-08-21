<?php
require("../../../../divblox/divblox.php");
class AccountsController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new AccountsController("accounts");
?>