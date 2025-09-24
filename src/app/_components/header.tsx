import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

<<<<<<< HEAD

=======
>>>>>>> 0a2b4189be28de59b22ddf77742f47e5823db27b
const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={18} />
<<<<<<< HEAD
        <Button variant="outline" size="icon">
=======
        <Button variant={"outline"} size={"icon"}>
>>>>>>> 0a2b4189be28de59b22ddf77742f47e5823db27b
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
<p>Header</p>;
>>>>>>> 0a2b4189be28de59b22ddf77742f47e5823db27b
