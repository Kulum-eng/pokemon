import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const loginUser = localStorage.getItem("user");
  const router = inject(Router);
  if(!loginUser) {
    router.navigate(["./"])
    return false; 
  }

  return true;
};
