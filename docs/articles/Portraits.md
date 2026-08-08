Портреты игроков/мобов/нпс
Потртеты устанавливаются функцией ''' SetPortraitBackgroundTexture''' и имеют зарезервированный slotIndex. Всего доступно 4 слота ( 0-3 ) для больших портретов и 16 ( 0-15 ) - для маленьких.

В Client\GlobalScript.lua объявлены соотетствующие глобальные переменные:

Для больших портретов:

PORTRAIT_AVATAR, 0 - портрет игрока
PORTRAIT_TARGET, 1 - портрет цели
PORTRAIT_ASTRAL_UNIT, 2 - портрет астральной цели
Для маленьких портретов:

PORTRAIT_TARGETS_TARGET, 0 - портрет цели цели (!)
PORTRAIT_PET, 1 - портрет пета
PORTRAIT_PSIONIC_CONTACT, 3 - портрет цели для PsionicNormalContact
PORTRAIT_CRUDE_PSIONIC_CONTACT, 4 - портрет цели для PsionicCrudeContact
PORTRAIT_PARTY_MEMBER_01 - 5 - портреты членов группы
...
PORTRAIT_PARTY_MEMBER_05 - 9