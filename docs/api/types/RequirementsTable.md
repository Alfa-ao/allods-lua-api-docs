 RequirementsTable

Таблица, представляющая описание требований (например к использованию заклинания). Содержит список таблиц:

RequirementsTable: table of tables (requirements) - индексированный с 0 список таблиц - описаний требований.
 Каждое требование представляет собой таблицу с полями:
  type: number (enum AFCT_...) or nil - Если требование составное, то значение перечисления enum AFCT_..., у простых требований это поле отсутствует.

  Остальные поля в зависимости от type:

Составные требования:
  type: number (enum AFCT_...) - Если требование составное, то значение перечисления enum AFCT_.... У таких требований есть список дочерних требований.
  isInNotPredicate: boolean - находимся ли мы сейчас в требовании Not - выполнение текущего требования инвертировано
  success: boolean - выполняется ли это требование
  childs: table of requirements - список дочерних требований, если есть

Простые требования:
  type: nil - у простых требований это поле отсутствует.
  success: boolean - выполняется ли это требование
  cause: number (int) - код ошибки.
  sysCause: string (enum "ENUM_ActionFailCause_...") - строковый код ошибки.
  isInNotPredicate: boolean - находимся ли мы сейчас в требовании Not - выполнение текущего требования инвертировано
  text: WString or nil - требования определенное в виде простой строки
  дополнительные параметры см. в EVENT_ACTION_FAILED_SPELL
    number: number or nil
    number2: number or nil
    money: number or nil - количество денег в меди
    name: WString or nil
    rank: number or nil - ранг заклинания или умения, если он больше 1
    dress: number or nil
    itemClass: WString or nil
    sysRace: string or nil
    sysPsionicContactType: string or nil
    reputationLevel: number or nil

Описание требований: "ENUM_ActionFailCause_...".

Дополнительные параметры как в EVENT_ACTION_FAILED_SPELL.

enum AFCT_...:

AFCT_Or - любое из требований может выполниться
AFCT_And - все требования должны выполняться
AFCT_Pet - все требования должны выполняться на ПИТОМЦЕ
AFCT_Not - дочернее требование не должно выполняться

-- пример использования
local spellbook = avatar.GetSpellBook()
local reqs = avatar.GetSpellRequirements( spellbook[0] )

local firstRequirement = nil

if reqs then
  local req = reqs.casterConditions[0]
  if req then

    if req.type then

      req = req.childs[ 0 ]
      if req then
        firstRequirement = req.sysCause
      end

    else
      firstRequirement = req.sysCause
    end
  end
end
