import React from 'react'

const page = () => {


   interface InputHTMLAttributes<T> {
      onChange?: ChangeEventHandler<T>;
   }
   type ChangeEventHandler<T> = (event: React.ChangeEvent<T>) => void;




   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.currentTarget); // HTMLButtonElement
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') console.log('엔터 입력!');
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };

   return (
      <div>

         <div>
            React.SyntheticEvent T E
            T: 이벤트가 발생한 요소 타입 (예: HTMLInputElement)
            E: 원래의 브라우저 이벤트 타입 (예: MouseEvent, KeyboardEvent 등)
         </div>


         <div>
            React.MouseEvent T  : onClick / onDoubleClick / onMouseDown / onMouseUp / onMouseEnter / onMouseLeave / onMouseMove
         </div>

         <div>
            React.KeyboardEvent T : onKeyDown / onKeyPress/  onKeyUp
         </div>

         <div>
            React.ChangeEvent T : onChange
         </div>

         <div>
            React.FormEvent T : onInput / onSubmit / onReset
         </div>

         <div>
            React.FocusEvent T : onFocus / onBlur
         </div>

         <div>
            React.DragEvent T : onDrag / onDragStart / onDragEnd / onDragEnter / onDragOver / onDragLeave / onDrop
         </div>

         <div>
            React.UIEvent T : onScroll
         </div>
         <div>
            React.WheelEvent T : onTouchStart / onTouchEnd / onTouchMove
         </div>
         <div>
            React.TouchEvent T : onContextMenu
         </div>
         <div>
            React.AnimationEvent T : onAnimationStart / onAnimationEnd
         </div>
         <div>
            React.TransitionEvent T : onTransitionEnd
         </div>

      </div>
   )
}

export default page