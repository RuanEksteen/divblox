<?php
require("../../../../divblox/divblox.php");
class CategoruyPageController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new CategoruyPageController("categoruy_page");
?>