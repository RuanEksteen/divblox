<?php
require("../../../../divblox/divblox.php");
class ExpensesCrudController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new ExpensesCrudController("expenses_crud");
?>