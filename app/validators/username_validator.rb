class UsernameValidator < ActiveModel::EachValidator
  def validate_each(record, attr_name, value)
    unless User.where(username: value).exists?
      record.errors.add(attr_name, 'is not unique', options.merge(value: value))
    end
  end
end
