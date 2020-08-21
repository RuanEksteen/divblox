<?php
require("../../../../divblox/divblox.php");
class HelloWorldController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
    public function checkEmailAddress() {
    $EmailAddressStr = $this->getInputValue('email_address');
    if (is_null($EmailAddressStr) || (strlen($EmailAddressStr) < 2)) {
        $this->setResult(false);
        $this->setReturnValue("Message","No email address provided");
        $this->presentOutput();
    }
    $this->setResult(true);
    $this->setReturnValue("Message","You provided the email: $EmailAddressStr");
    $this->presentOutput();
}

}
$ComponentObj = new HelloWorldController("hello_world");
?>