---
outline: [ 1, 4 ]
---

## CategoryUserMods
### Описание

События и функции Lua API, относящиеся к специальной поддержке пользовательских дополнений.

Пользовательские дополнения должны находиться в папке с ресурсами игры `\Mods\Addons`. Каждое дополнение - в отдельной папке. Подробности в пользовательской документации.

В пользовательских дополнениях можно использовать специальную библиотеку: `userMods`. В оригинальных дополнениях она недоступна. Библиотека предоставляет служебную функциональность, аналоги которой в оригинальных дополнениях могут быть использованы только в отладочных целях.

---

<!--@include: function.userMods.FromWString.md--> 

---

<!--@include: function.userMods.GetAccountUniqueId.md--> 

---

<!--@include: function.userMods.GetAvatarConfigSection.md--> 

---

<!--@include: function.userMods.GetCallStack.md--> 

---

<!--@include: function.userMods.GetGlobalConfigSection.md--> 

---

<!--@include: function.userMods.GetResourcePersistentId.md--> 

---

<!--@include: function.userMods.SendSelfChatMessage.md--> 

---

<!--@include: function.userMods.SetAvatarConfigSection.md--> 

---

<!--@include: function.userMods.SetGlobalConfigSection.md--> 

---

<!--@include: function.userMods.ToWString.md-->