<?php
require("../../../../divblox/divblox.php");
class ExpensesPageController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new ExpensesPageController("expenses_page");
?>